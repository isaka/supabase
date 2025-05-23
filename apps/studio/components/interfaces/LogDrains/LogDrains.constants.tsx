import { BracesIcon } from 'lucide-react'
import { Datadog, Grafana } from 'icons'

const iconProps = {
  height: 24,
  width: 24,
  className: 'text-foreground-light',
}

export const LOG_DRAIN_TYPES = [
  {
    value: 'webhook',
    name: 'HTTP Endpoint',
    description: 'Forward logs as a POST request to a custom HTTP endpoint',
    icon: <BracesIcon {...iconProps} />,
  },
  {
    value: 'datadog',
    name: 'Datadog',
    description: 'Datadog is a monitoring service for cloud-scale applications',
    icon: <Datadog {...iconProps} fill="currentColor" strokeWidth={0} />,
  },
  {
    value: 'loki',
    name: 'Loki',
    description:
      'Loki is an open-source log aggregation system designed to store and query logs from multiple sources',
    icon: <Grafana {...iconProps} fill="currentColor" strokeWidth={0} />,
  },
] as const

export const LOG_DRAIN_SOURCE_VALUES = LOG_DRAIN_TYPES.map((source) => source.value)

export type LogDrainType =
  | (typeof LOG_DRAIN_TYPES)[number]['value']
  | 'postgres'
  | 'bigquery'
  | 'elastic'

export const DATADOG_REGIONS = [
  {
    label: 'AP1',
    value: 'AP1',
  },
  {
    label: 'EU',
    value: 'EU',
  },
  {
    label: 'US1',
    value: 'US1',
  },
  {
    label: 'US1-FED',
    value: 'US1-FED',
  },
  {
    label: 'US3',
    value: 'US3',
  },
  {
    label: 'US5',
    value: 'US5',
  },
] as const

export type LogDrainDatadogConfig = {
  api_key: string
  region: string
}

export type LogDrainWebhookConfig = {
  url: string
}
