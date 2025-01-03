using backend.Model;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/student")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        public IEnumerable<StudentInfo> getStudents()
        {

            //var students = new StudentInfo()
            //{
            //    Email = "test"
            //};

            //return students(e);

            return new List<StudentInfo>
            {
                new() {Id=1, Email="akila@gmail.com", Name="akila", Phone=071111111 }
            };
        }
    }
}
