using System.Collections.Generic;
using TodoList.Api.Demo.Models;

namespace TodoList.Api.Demo.Business
{
    public class ServiceResponse<T> : BaseServiceResponse where T : BaseDto
    {
        public List<T> List { get; set; }
        public T Dto { get; set; }

        public class ResponseBuilder : BaseServiceResponseBuilder<ServiceResponse<T>>
        {
            public ServiceResponse<T> BuildServiceResponse(List<T> list)
            {
                serviceResponse.List = list;
                return serviceResponse;
            }

            public ServiceResponse<T> BuildServiceResponse(T dto)
            {
                serviceResponse.Dto = dto;
                return serviceResponse;
            }
        }
    }
}
