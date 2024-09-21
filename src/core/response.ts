import { StatusCodes } from "http-status-codes"

interface RestResponseInterface <T>{
    status: StatusCodes,
    data: T
    message: string, 
}


export default class RestResponse { 
    static response<T> (data: T,HttpCode: StatusCodes, message: string = "effectuer avec succes"): RestResponseInterface<T>{
        return {
            status: HttpCode,
            data,
            message,
        } as RestResponseInterface<T>
    }

}
