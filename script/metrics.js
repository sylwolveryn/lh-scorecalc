
/**
 * V6 weights
 */

export const weights = {
  v5: {
    FCP: 0.2,
    SI: 0.26666,
    FMP: 0.066666,
    TTI: 0.33333,
    FCI: 0.133333,
  },
  v6: {
    FCP: 0.15,
    SI:  0.15,
    LCP: 0.25,
    TTI: 0.15,
    TBT: 0.25,
    CLS: 0.05
  },
};

/**
 * V5/v6 scoring curves
 */
export const scoring = {
  FCP: {median: 4000, falloff: 2000, auditId: 'first-contentful-paint', name: 'First Contentful Paint'},
  FMP: {median: 4000, falloff: 2000, auditId: 'first-meaningful-paint', name: 'First Meaningful Paint'},
  SI: {median: 5800, falloff: 2900, auditId: 'speed-index', name: 'Speed Index'},
  TTI: {median: 7300, falloff: 2900, auditId: 'interactive', name: 'Time to Interactive'},
  FCI: {median: 6500, falloff: 2900, auditId: 'first-cpu-idle', name: 'First CPU Idle'},
  TBT: {median: 600, falloff: 200, auditId: 'total-blocking-time', name: 'Total Blocking Time'},
  LCP: {median: 4000, falloff: 2000, auditId: 'largest-contentful-paint', name: 'Largest Contentful Paint'},
  CLS: {median: 0.25, falloff: 0.054, auditId: 'cumulative-layout-shift', name: 'Cumulative Layout Shift', units: 'unitless'},
};
