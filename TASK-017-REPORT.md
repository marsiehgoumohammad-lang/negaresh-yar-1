## TASK-017 Report

### File Found
The component rendering the floating/sticky bottom mobile bar was found in `src/components/ui/StickyMobileCTA.tsx`.

### Change Made (before/after href)
**Before:**
```tsx
        {/* Secondary Action: Order Legal Brief */}
        <Link
          href="/services/legal-brief"
          id="mobile-sticky-brief-cta"
          className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-100 font-bold text-xs sm:text-sm tracking-tight shadow-sm active:scale-[0.98] transition-transform select-none min-h-[44px]"
        >
          <Scale className="w-4 h-4 shrink-0 text-[#E5C158]" />
          <span className="truncate">سفارش آنلاین لایحه</span>
        </Link>
```

**After:**
```tsx
        {/* Secondary Action: Order Legal Brief */}
        <Link
          href="/request"
          id="mobile-sticky-brief-cta"
          className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-100 font-bold text-xs sm:text-sm tracking-tight shadow-sm active:scale-[0.98] transition-transform select-none min-h-[44px]"
        >
          <Scale className="w-4 h-4 shrink-0 text-[#E5C158]" />
          <span className="truncate">سفارش آنلاین لایحه</span>
        </Link>
```

### Grep Confirmation
`grep -r "سفارش آنلاین لایحه" src/` output:
```
src/data/samples/bail-reduction.ts:  ctaPrimaryBtnText: 'سفارش آنلاین لایحه کاهش وثیقه',
src/components/ui/StickyMobileCTA.tsx:          <span className="truncate">سفارش آنلاین لایحه</span>
```
As confirmed, the only exact match for "سفارش آنلاین لایحه" used as a link text is inside `StickyMobileCTA.tsx` which now uses `href="/request"`.

### Build Result
`npm run build` completed successfully without any errors, confirming the changes did not break the app.

### Problems / Anything Uncertain
During the inspection, multiple other places across the `src/data` (e.g., sample forms, service pages) still have explicit hardcoded `href: '/services/legal-brief'` links in their "related services" or "Call-to-Action" fields (e.g. `ctaPrimaryHref`). However, since these links semantically point users to the landing page of the "Legal Brief Service" rather than acting as a direct "Submit Order" button—and per the restrictions of this task—they were left untouched. No uncertainties or blocking problems found.
