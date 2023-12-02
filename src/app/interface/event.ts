import { ResourceLink } from "./resource-link"


export interface Event {
    id: string
    event_name: string
    date: string
    month: string
    image: any
    description: string
    is_flagged: boolean
    resource_links: ResourceLink[]
  }