using BusinessObjects;
using DataAccessObjects;

namespace Repositories
{
    public interface IApplicationRepository
    {
        List<Application> GetAll();
        Application GetById(string applicationId);
        void Insert(Application application);
        void Update(Application application);
        void Delete(string applicationId);
        List<Application> GetByFreelancerId(string freelancerId);
        List<Application> GetByProjectId(string projectId);
    }

    public class ApplicationRepository : IApplicationRepository
    {
        private readonly ApplicationDAO _applicationDAO;

        public ApplicationRepository(ApplicationDAO applicationDAO)
        {
            _applicationDAO = applicationDAO;
        }

        public List<Application> GetAll() => _applicationDAO.GetAll();
        public Application GetById(string applicationId) => _applicationDAO.GetById(applicationId);
        public void Insert(Application application) => _applicationDAO.Insert(application);
        public void Update(Application application) => _applicationDAO.Update(application);
        public void Delete(string applicationId) => _applicationDAO.Delete(applicationId);
        public List<Application> GetByFreelancerId(string freelancerId) => _applicationDAO.GetByFreelancerId(freelancerId);
        public List<Application> GetByProjectId(string projectId) => _applicationDAO.GetByProjectId(projectId);
    }
}
