using BusinessObjects;
using DataAccessObjects;

namespace Repositories
{
    public interface ISubmittionRepository
    {
        Submittion GetById(string submittionId);
        List<Submittion> GetByFreelancerId(string freelancerId);
        List<Submittion> GetByStatus(string status);
        void Insert(Submittion submittion);
        void Update(Submittion submittion);
        void Delete(string submittionId);
        List<Submittion> GetByMilestoneId(string milestoneId);
    }

    public class SubmittionRepository : ISubmittionRepository
    {
        private readonly SubmittionDAO _submittionDAO;

        public SubmittionRepository(SubmittionDAO submittionDAO)
        {
            _submittionDAO = submittionDAO;
        }

        public Submittion GetById(string submittionId) =>
            _submittionDAO.GetSubmittionById(submittionId);

        public List<Submittion> GetByFreelancerId(string freelancerId) =>
            _submittionDAO.GetSubmittionsByFreelancerId(freelancerId);

        public List<Submittion> GetByStatus(string status) =>
            _submittionDAO.GetSubmittionsByStatus(status);

        public void Insert(Submittion submittion) =>
            _submittionDAO.AddSubmittion(submittion);

        public void Update(Submittion submittion) =>
            _submittionDAO.UpdateSubmittion(submittion);

        public void Delete(string submittionId) =>
            _submittionDAO.DeleteSubmittion(submittionId);

        public List<Submittion> GetByMilestoneId(string milestoneId) =>
            _submittionDAO.GetSubmittionsByMilestoneId(milestoneId);
    }
}
