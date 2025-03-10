import { Resource } from "../models/resources";
import { v4 as uuidv4 } from 'uuid';

export class ResourceService {
    private resources: Resource[] = [];

    createResource(title: string, description: string): Resource {
        const newResource: Resource = {
            id: uuidv4(),
            title,
            description,
            createdAt: new Date()
        };
        this.resources.push(newResource);
        return newResource;
    }

    getAllResources(): Resource[] {
        return this.resources;
    }

    getResourceById(id: string): Resource | undefined {
        return this.resources.find(r => r.id === id);
    }

    updateResource(id: string, updatedData: Partial<Resource>): Resource | undefined {
        const index = this.resources.findIndex(r => r.id === id);
        if (index !== -1) {
            this.resources[index] = { ...this.resources[index], ...updatedData };
            return this.resources[index];
        }
        return undefined;
    }

    deleteResource(id: string): boolean {
        const initialLength = this.resources.length;
        this.resources = this.resources.filter(r => r.id !== id);
        return initialLength !== this.resources.length;
    }
}