using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface IExpertiseProfileService
    {
        List<ExpertiseProfile> GetAllExpertiseProfiles();
        ExpertiseProfile GetExpertiseProfileById(string profileId);
        void CreateExpertiseProfile(ExpertiseProfile profile);
        void UpdateExpertiseProfile(ExpertiseProfile profile);
        void DeleteExpertiseProfile(string profileId);
        ExpertiseProfile GetExpertiseProfileByFreelancerId(string freelancerId);
        List<ExpertiseProfile> GetExpertiseProfilesByField(string field);
    }

    public class ExpertiseProfileService : IExpertiseProfileService
    {
        private readonly IExpertiseProfileRepository _expertiseProfileRepository;

        public ExpertiseProfileService(IExpertiseProfileRepository expertiseProfileRepository)
        {
            _expertiseProfileRepository = expertiseProfileRepository;
        }

        public List<ExpertiseProfile> GetAllExpertiseProfiles() => _expertiseProfileRepository.GetAll();
        public ExpertiseProfile GetExpertiseProfileById(string profileId) => _expertiseProfileRepository.GetById(profileId);
        public void CreateExpertiseProfile(ExpertiseProfile profile) => _expertiseProfileRepository.Insert(profile);
        public void UpdateExpertiseProfile(ExpertiseProfile profile) => _expertiseProfileRepository.Update(profile);
        public void DeleteExpertiseProfile(string profileId) => _expertiseProfileRepository.Delete(profileId);
        public ExpertiseProfile GetExpertiseProfileByFreelancerId(string freelancerId) => _expertiseProfileRepository.GetByFreelancerId(freelancerId);
        public List<ExpertiseProfile> GetExpertiseProfilesByField(string field) => _expertiseProfileRepository.GetByField(field);
    }
}
