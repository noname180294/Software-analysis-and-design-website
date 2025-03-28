using BusinessObjects;
using DataAccessObjects;

namespace Repositories
{
    public interface IMilestoneRepository
    {
        List<Milestone> GetAll();
        Milestone GetById(string milestoneId);
        void Insert(Milestone milestone);
        void Update(Milestone milestone);
        void Delete(string milestoneId);
        List<Milestone> GetByProjectId(string projectId);
        List<Milestone> GetByStatus(string status);
    }

    public class MilestoneRepository : IMilestoneRepository
    {
        private readonly MilestoneDAO _milestoneDAO;

        public MilestoneRepository(MilestoneDAO milestoneDAO)
        {
            _milestoneDAO = milestoneDAO;
        }

        public List<Milestone> GetAll() => _milestoneDAO.GetAll();
        public Milestone GetById(string milestoneId) => _milestoneDAO.GetById(milestoneId);
        public void Insert(Milestone milestone) => _milestoneDAO.Insert(milestone);
        public void Update(Milestone milestone) => _milestoneDAO.Update(milestone);
        public void Delete(string milestoneId) => _milestoneDAO.Delete(milestoneId);
        public List<Milestone> GetByProjectId(string projectId) => _milestoneDAO.GetByProjectId(projectId);
        public List<Milestone> GetByStatus(string status) => _milestoneDAO.GetByStatus(status);
    }
}
