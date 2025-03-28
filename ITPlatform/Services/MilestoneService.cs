using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface IMilestoneService
    {
        List<Milestone> GetAllMilestones();
        Milestone GetMilestoneById(string milestoneId);
        void CreateMilestone(Milestone milestone);
        void UpdateMilestone(Milestone milestone);
        void DeleteMilestone(string milestoneId);
        List<Milestone> GetMilestonesByProjectId(string projectId);
        List<Milestone> GetMilestonesByStatus(string status);
    }

    public class MilestoneService : IMilestoneService
    {
        private readonly IMilestoneRepository _milestoneRepository;

        public MilestoneService(IMilestoneRepository milestoneRepository)
        {
            _milestoneRepository = milestoneRepository;
        }

        public List<Milestone> GetAllMilestones() => _milestoneRepository.GetAll();
        public Milestone GetMilestoneById(string milestoneId) => _milestoneRepository.GetById(milestoneId);
        public void CreateMilestone(Milestone milestone) => _milestoneRepository.Insert(milestone);
        public void UpdateMilestone(Milestone milestone) => _milestoneRepository.Update(milestone);
        public void DeleteMilestone(string milestoneId) => _milestoneRepository.Delete(milestoneId);
        public List<Milestone> GetMilestonesByProjectId(string projectId) => _milestoneRepository.GetByProjectId(projectId);
        public List<Milestone> GetMilestonesByStatus(string status) => _milestoneRepository.GetByStatus(status);
    }
}
