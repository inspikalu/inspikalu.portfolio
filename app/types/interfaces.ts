export interface ImageFormats {
    thumbnail?: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        sizeInBytes: number;
        url: string;
        provider_metadata: {
            public_id: string;
            resource_type: string;
        };
    };
}

export interface ProjectImage {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: ImageFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Project {
    id: number;
    documentId: string;
    name: string;
    description: string;
    liveUrl: string;
    githubUrl: string;
    isPrivate: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: ProjectImage;
}

export interface ApiResponse {
    data: Project[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
