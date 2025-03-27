using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface IApplicationService
    {
        List<Application> GetAllApplications();
        Application GetApplicationById(string applicationId);
        void CreateApplication(Application application);
        void UpdateApplication(Application application);
        void DeleteApplication(string applicationId);
        List<Application> GetApplicationsByFreelancerId(string freelancerId);
        List<Application> GetApplicationsByProjectId(string projectId);
    }

    public class ApplicationService : IApplicationService
    {
        private readonly IApplicationRepository _applicationRepository;

        public ApplicationService(IApplicationRepository applicationRepository)
        {
            _applicationRepository = applicationRepository;
        }

        public List<Application> GetAllApplications() => _applicationRepository.GetAll();
        public Application GetApplicationById(string applicationId) => _applicationRepository.GetById(applicationId);
        public void CreateApplication(Application application) => _applicationRepository.Insert(application);
        public void UpdateApplication(Application application) => _applicationRepository.Update(application);
        public void DeleteApplication(string applicationId) => _applicationRepository.Delete(applicationId);
        public List<Application> GetApplicationsByFreelancerId(string freelancerId) => _applicationRepository.GetByFreelancerId(freelancerId);
        public List<Application> GetApplicationsByProjectId(string projectId) => _applicationRepository.GetByProjectId(projectId);
    }
}
