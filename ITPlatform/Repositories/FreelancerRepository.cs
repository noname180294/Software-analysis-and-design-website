using BusinessObjects;
using DataAccessObjects;

namespace Repositories
{
    public interface IFreelancerRepository
    {
        List<Freelancer> GetAll();
        Freelancer GetById(string freelancerId);
        void Insert(Freelancer freelancer);
        void Update(Freelancer freelancer);
        void Delete(string freelancerId);
        Freelancer GetByAccountId(string accountId);
        List<Freelancer> GetByGender(string gender);
    }

    public class FreelancerRepository : IFreelancerRepository
    {
        private readonly FreelancerDAO _freelancerDAO;

        public FreelancerRepository(FreelancerDAO freelancerDAO)
        {
            _freelancerDAO = freelancerDAO;
        }

        public List<Freelancer> GetAll() => _freelancerDAO.GetAll();
        public Freelancer GetById(string freelancerId) => _freelancerDAO.GetById(freelancerId);
        public void Insert(Freelancer freelancer) => _freelancerDAO.Insert(freelancer);
        public void Update(Freelancer freelancer) => _freelancerDAO.Update(freelancer);
        public void Delete(string freelancerId) => _freelancerDAO.Delete(freelancerId);
        public Freelancer GetByAccountId(string accountId) => _freelancerDAO.GetByAccountId(accountId);
        public List<Freelancer> GetByGender(string gender) => _freelancerDAO.GetByGender(gender);
    }
}
