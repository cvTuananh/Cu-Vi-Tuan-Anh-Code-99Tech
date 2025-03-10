import { Request, Response } from 'express';
import { ResourceService } from '../services/resourceService';

const resourceService = new ResourceService();

export class ResourceController {
    static createResource(req: Request, res: Response): any {
        const { title, description } = req.body;
        
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }

        const createdResource = resourceService.createResource(title, description);
        res.status(201).json(createdResource);
    }

    static listResources(req: Request, res: Response): any {
        const { title } = req.query;
        let resources = resourceService.getAllResources();

        if (title) {
            resources = resources.filter(r => 
                r.title.toLowerCase().includes((title as string).toLowerCase())
            );
        }

        res.json(resources);
    }

    static getResource(req: Request, res: Response): any {
        const resource = resourceService.getResourceById(req.params.id);
        
        if (!resource) {
            return res.status(404).json({ error: 'Resource not found' });
        }
        
        res.json(resource);
    }

    static updateResource(req: Request, res: Response): any {
        const { title, description } = req.body;
        
        const updatedResource = resourceService.updateResource(req.params.id, {
            title,
            description
        });

        if (!updatedResource) {
            return res.status(404).json({ error: 'Resource not found' });
        }

        res.json(updatedResource);
    }

    static deleteResource(req: Request, res: Response): any {
        const deleted = resourceService.deleteResource(req.params.id);
        
        if (!deleted) {
            return res.status(404).json({ error: 'Resource not found' });
        }
        
        res.status(204).send();
    }
}