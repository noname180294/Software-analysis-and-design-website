using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface ISubmittionService
    {
        Submittion GetSubmittionById(string submittionId);
        List<Submittion> GetSubmittionsByFreelancerId(string freelancerId);
        List<Submittion> GetSubmittionsByStatus(string status);
        void CreateSubmittion(Submittion submittion);
        void UpdateSubmittion(Submittion submittion);
        void DeleteSubmittion(string submittionId);
        List<Submittion> GetSubmittionsByMilestoneId(string milestoneId);
    }

    public class SubmittionService : ISubmittionService
    {
        private readonly ISubmittionRepository _submittionRepository;

        public SubmittionService(ISubmittionRepository submittionRepository)
        {
            _submittionRepository = submittionRepository;
        }

        public Submittion GetSubmittionById(string submittionId) =>
            _submittionRepository.GetById(submittionId);

        public List<Submittion> GetSubmittionsByFreelancerId(string freelancerId) =>
            _submittionRepository.GetByFreelancerId(freelancerId);

        public List<Submittion> GetSubmittionsByStatus(string status) =>
            _submittionRepository.GetByStatus(status);

        public void CreateSubmittion(Submittion submittion) =>
            _submittionRepository.Insert(submittion);

        public void UpdateSubmittion(Submittion submittion) =>
            _submittionRepository.Update(submittion);

        public void DeleteSubmittion(string submittionId) =>
            _submittionRepository.Delete(submittionId);

        public List<Submittion> GetSubmittionsByMilestoneId(string milestoneId) =>
            _submittionRepository.GetByMilestoneId(milestoneId);
    }
}
