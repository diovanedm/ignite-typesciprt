import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(req: Request, res: Response) {
    CreateCourseService.execute({
        name: "NodeJs", 
        educator: "Diovane", 
        duration: 10
    });

    CreateCourseService.execute({
        name: "NodeJs", 
        educator: "Diego", 
    });

    return res.send()
}