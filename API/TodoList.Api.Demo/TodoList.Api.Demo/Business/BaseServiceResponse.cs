using System;

namespace TodoList.Api.Demo.Business
{
    public class BaseServiceResponse
    {
        public string Message { get; set; }
        public bool Success { get; set; }

        public class BaseServiceResponseBuilder<T> where T : BaseServiceResponse
        {
            protected T serviceResponse;

            protected BaseServiceResponseBuilder()
            {
                serviceResponse = (T)Activator.CreateInstance(typeof(T));
            }

            public T Response(string message, bool success = true)
            {
                serviceResponse.Message = message;
                serviceResponse.Success = success;
                return serviceResponse;
            }
        }
    }
}
