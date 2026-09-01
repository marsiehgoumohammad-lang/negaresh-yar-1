'use client';

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export interface LawyerConversionEventParams extends UTMParams {
  messenger_name: 'whatsapp' | 'telegram' | 'eitaa' | 'bale' | 'rubika' | 'phone' | string;
  page_url?: string;
  city?: string;
  source?: string;
  campaign?: string;
  [key: string]: unknown;
}

const UTM_STORAGE_KEY = 'negaresh_utm_data';

/**
 * Parses UTM parameters from the current URL and persists them in sessionStorage.
 */
export function captureAndGetUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};

  const params: UTMParams = {};
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('utm_source');
    const medium = urlParams.get('utm_medium');
    const campaign = urlParams.get('utm_campaign');
    const content = urlParams.get('utm_content');
    const term = urlParams.get('utm_term');

    if (source) params.utm_source = source;
    if (medium) params.utm_medium = medium;
    if (campaign) params.utm_campaign = campaign;
    if (content) params.utm_content = content;
    if (term) params.utm_term = term;

    // If new UTM parameters are present in URL, store them in sessionStorage
    if (Object.keys(params).length > 0) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(params));
      return params;
    }

    // Otherwise, attempt to read existing stored UTM parameters from session
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Fail silently in environments where storage is restricted
  }

  return params;
}

/**
 * Dispatches events to window.dataLayer (GTM), window.gtag (GA4), and DOM CustomEvent.
 */
export function trackLawyerConversion({
  messenger_name,
  city = 'all',
  source = 'unknown',
  campaign,
  page_url,
  ...extra
}: LawyerConversionEventParams) {
  if (typeof window === 'undefined') return;

  const currentUrl = page_url || window.location.href;
  const utm = captureAndGetUTMParams();
  const effectiveCampaign = campaign || utm.utm_campaign || 'fair_lawyers';

  const eventPayload = {
    event: 'messenger_click',
    messenger_name,
    page_url: currentUrl,
    city,
    source,
    campaign: effectiveCampaign,
    utm_source: utm.utm_source || 'organic',
    utm_medium: utm.utm_medium || 'website',
    utm_campaign: effectiveCampaign,
    utm_content: utm.utm_content || '',
    ...extra,
    timestamp: new Date().toISOString(),
  };

  // 1. Google Tag Manager / dataLayer standard push
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventPayload);
  } catch {
    // dataLayer push fallback
  }

  // 2. Direct Google Analytics 4 (gtag) push
  try {
    if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'messenger_click', {
        messenger_name,
        page_url: currentUrl,
        city,
        source,
        campaign: effectiveCampaign,
        utm_source: utm.utm_source || 'organic',
        utm_medium: utm.utm_medium || 'website',
        utm_campaign: effectiveCampaign,
        utm_content: utm.utm_content || '',
      });
    }
  } catch {
    // gtag fallback
  }

  // 3. Track messenger-specific individual events
  const specificEventName = `${messenger_name}_click`;
  try {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: specificEventName,
        messenger_name,
        page_url: currentUrl,
        city,
        source,
        campaign: effectiveCampaign,
        utm_source: utm.utm_source || 'organic',
        utm_medium: utm.utm_medium || 'website',
        utm_campaign: effectiveCampaign,
      });
    }
    if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', specificEventName, {
        messenger_name,
        page_url: currentUrl,
        city,
        source,
        campaign: effectiveCampaign,
      });
    }
  } catch {
    // specific event fallback
  }

  // 4. Custom DOM Event for internal components or local loggers
  try {
    const customEv = new CustomEvent('negaresh:lawyer_conversion', {
      detail: eventPayload,
    });
    window.dispatchEvent(customEv);
  } catch {
    // custom event fallback
  }
}

/**
 * Helper to track phone call conversions
 */
export function trackPhoneConversion({
  city = 'all',
  source = 'unknown',
  campaign,
}: {
  city?: string;
  source?: string;
  campaign?: string;
}) {
  trackLawyerConversion({
    messenger_name: 'phone',
    city,
    source,
    campaign,
  });
}

// Global declaration for Window dataLayer & gtag
declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}
