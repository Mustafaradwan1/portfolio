export type  projectTs = 
    {
        title: string
        description:string
        tags: string[]
        imageUrl: any
        hach:string
} 
export type  projectsArr = projectTs[]

export type  experiencesTs = {
    cardTitle: string
    location: string
    description:string
    date: string
    icon:any
  }
export type  experiencesDataTs = experiencesTs[]

export type  LinkTs = {
        name:string
        hash:string
  }
export type  LinksTs = LinkTs[]