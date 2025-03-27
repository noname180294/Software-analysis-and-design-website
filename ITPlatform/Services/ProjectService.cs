using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface IProjectService
    {
        List<Project> GetAllProjects();
        Project GetProjectById(string projectId);
        void CreateProject(Project project);
        void UpdateProject(Project project);
        void DeleteProject(string projectId);
        List<Project> GetProjectsByClientId(string clientId);
        List<Project> GetProjectsByStatus(string status);
    }

    public class ProjectService : IProjectService
    {
        private readonly IProjectRepository _projectRepository;

        public ProjectService(IProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
        }

        public List<Project> GetAllProjects() => _projectRepository.GetAll();
        public Project GetProjectById(string projectId) => _projectRepository.GetById(projectId);
        public void CreateProject(Project project) => _projectRepository.Insert(project);
        public void UpdateProject(Project project) => _projectRepository.Update(project);
        public void DeleteProject(string projectId) => _projectRepository.Delete(projectId);
        public List<Project> GetProjectsByClientId(string clientId) => _projectRepository.GetByClientId(clientId);
        public List<Project> GetProjectsByStatus(string status) => _projectRepository.GetByStatus(status);
    }
}
