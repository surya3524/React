using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;


namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private readonly IMediator _mediator;

        protected IMediator Mediator
        {
            get
            {
                if(_mediator == null)
                {
                    return HttpContext.RequestServices.GetService<IMediator>();
                }
                return _mediator;
            }
        }
    }

}
