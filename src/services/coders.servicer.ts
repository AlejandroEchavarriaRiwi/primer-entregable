import { ICCoder, ICoder } from "@/models/coders/coder.model";
import { HttpClient } from "@/utils/client-http";

export class CoderService {
    private httpClient: HttpClient;
    
    constructor() {
        this.httpClient = new HttpClient();
    }

    async findAll(){
        try{
            const coders = this.httpClient.get<ICoder[]>("coders")
            return coders;
        }catch(error) {
            console.error("Error fetching coders", error)
            throw error;
        }
    }

    async destroy(id:string){
        try{
            const coders = this.httpClient.delete<ICoder>(`coders/${id}`)
            return coders
        }catch(error) {
            console.error("Error deleting coder", error)
            throw error;
        }
    }

    async create(coder: ICCoder){
        try {
            const createdCoder = await this.httpClient.post<ICoder, ICCoder>("coders", coder)
            return createdCoder
        } catch(error) {
            console.error("Error creating coder", error)
            throw error
        }
    }

    async update(id: string, coder: ICoder){
        try{
            const updatedCoder = this.httpClient.put(`coders/${id}`, coder)
            return updatedCoder
        }catch(error) {
            console.error("Error updating coder", error)
            throw error;
        }
    }
    
}