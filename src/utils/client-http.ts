const defaultBaseURL = "https://671638c933bc2bfe40bcf589.mockapi.io/api/v1/"

export class HttpClient {
    private baseUrl:string

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl || defaultBaseURL;
    }

    async get<T>(url: string): Promise<T> {
        const headers = await this.getHeaders();
        const response = await fetch(`${this.baseUrl}${url}`,{
            headers: headers,
            method: 'GET',
            cache: 'no-store'
        });
        return this.handleResponse(response)
    }

    async delete<T>(url: string):Promise<T>{
        const headers = await this.getHeaders();
        const response = await fetch(`${this.baseUrl}${url}`,{
            headers: headers,
            method: 'DELETE'
        });

        return this.handleResponse(response)
    }

    async post<T, R>(url: string, body: R): Promise<T> {
        const headers = await this.getHeaders()
        try {
            const response = await fetch(`${this.baseUrl}${url}`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify(body)
            })
            return this.handleResponse(response)
        } catch (error) {
            console.error('Error en la petición POST:', error)
            throw error
        }
    }

    async put<T,R>(url: string, body:R): Promise<T> {
        const headers = await this.getHeaders();
        const response = await fetch(`${this.baseUrl}${url}`,{
            headers: headers,
            method: 'PUT',
            body: JSON.stringify(body)
        });
        return this.handleResponse(response)
    }

    private async getHeaders(){
        return{
            "Content-Type": "application/json"
        }
    }

    private async handleResponse(response: Response) {
        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.message || 'An error occurred');
        }
        return await response.json()
    }
}
