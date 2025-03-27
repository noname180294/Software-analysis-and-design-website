using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface IFreelancerService
    {
        List<Freelancer> GetAllFreelancers();
        Freelancer GetFreelancerById(string freelancerId);
        void CreateFreelancer(Freelancer freelancer);
        void UpdateFreelancer(Freelancer freelancer);
        void DeleteFreelancer(string freelancerId);
        Freelancer GetFreelancerByAccountId(string accountId);
        List<Freelancer> GetFreelancersByGender(string gender);
    }

    public class FreelancerService : IFreelancerService
    {
        private readonly IFreelancerRepository _freelancerRepository;

        public FreelancerService(IFreelancerRepository freelancerRepository)
        {
            _freelancerRepository = freelancerRepository;
        }

        public List<Freelancer> GetAllFreelancers() => _freelancerRepository.GetAll();
        public Freelancer GetFreelancerById(string freelancerId) => _freelancerRepository.GetById(freelancerId);
        public void CreateFreelancer(Freelancer freelancer) => _freelancerRepository.Insert(freelancer);
        public void UpdateFreelancer(Freelancer freelancer) => _freelancerRepository.Update(freelancer);
        public void DeleteFreelancer(string freelancerId) => _freelancerRepository.Delete(freelancerId);
        public Freelancer GetFreelancerByAccountId(string accountId) => _freelancerRepository.GetByAccountId(accountId);
        public List<Freelancer> GetFreelancersByGender(string gender) => _freelancerRepository.GetByGender(gender);
    }
}
