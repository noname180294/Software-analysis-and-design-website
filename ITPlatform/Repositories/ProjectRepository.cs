using BusinessObjects;
using DataAccessObjects;

namespace Repositories
{
    public interface IProjectRepository
    {
        List<Project> GetAll();
        Project GetById(string projectId);
        void Insert(Project project);
        void Update(Project project);
        void Delete(string projectId);
        List<Project> GetByClientId(string clientId);
        List<Project> GetByStatus(string status);
    }

    public class ProjectRepository : IProjectRepository
    {
        private readonly ProjectDAO _projectDAO;

        public ProjectRepository(ProjectDAO projectDAO)
        {
            _projectDAO = projectDAO;
        }

        public List<Project> GetAll() => _projectDAO.GetAll();
        public Project GetById(string projectId) => _projectDAO.GetById(projectId);
        public void Insert(Project project) => _projectDAO.Insert(project);
        public void Update(Project project) => _projectDAO.Update(project);
        public void Delete(string projectId) => _projectDAO.Delete(projectId);
        public List<Project> GetByClientId(string clientId) => _projectDAO.GetByClientId(clientId);
        public List<Project> GetByStatus(string status) => _projectDAO.GetByStatus(status);
    }
}
