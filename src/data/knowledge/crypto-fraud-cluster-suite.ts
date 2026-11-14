import { Metadata } from 'next';
import { KnowledgeArticleData } from './types';
import { CryptoContentSpec, toCryptoKnowledgeData, toCryptoMetadata } from './crypto-fraud-cluster-builder';
import { cryptoPart1 } from './crypto-fraud-cluster-part1';
import { cryptoPart2 } from './crypto-fraud-cluster-part2';
import { cryptoPart3 } from './crypto-fraud-cluster-part3';
import { cryptoPart4 } from './crypto-fraud-cluster-part4';

export const cryptoClusterSpecs: CryptoContentSpec[] = [
  ...cryptoPart1,
  ...cryptoPart2,
  ...cryptoPart3,
  ...cryptoPart4,
];

export const cryptoFraudClusterArticles: KnowledgeArticleData[] = cryptoClusterSpecs.map(toCryptoKnowledgeData);

export const cryptoFraudClusterMetadataMap: Record<string, Metadata> = Object.fromEntries(
  cryptoClusterSpecs.map((spec) => [spec.slug, toCryptoMetadata(spec)] as const),
);
