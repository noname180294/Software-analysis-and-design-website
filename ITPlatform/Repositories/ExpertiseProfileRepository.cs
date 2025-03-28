using BusinessObjects;
using DataAccessObjects;

namespace Repositories
{
    public interface IExpertiseProfileRepository
    {
        List<ExpertiseProfile> GetAll();
        ExpertiseProfile GetById(string profileId);
        void Insert(ExpertiseProfile profile);
        void Update(ExpertiseProfile profile);
        void Delete(string profileId);
        ExpertiseProfile GetByFreelancerId(string freelancerId);
        List<ExpertiseProfile> GetByField(string field);
    }

    public class ExpertiseProfileRepository : IExpertiseProfileRepository
    {
        private readonly ExpertiseProfileDAO _expertiseProfileDAO;

        public ExpertiseProfileRepository(ExpertiseProfileDAO expertiseProfileDAO)
        {
            _expertiseProfileDAO = expertiseProfileDAO;
        }

        public List<ExpertiseProfile> GetAll() => _expertiseProfileDAO.GetAll();
        public ExpertiseProfile GetById(string profileId) => _expertiseProfileDAO.GetById(profileId);
        public void Insert(ExpertiseProfile profile) => _expertiseProfileDAO.Insert(profile);
        public void Update(ExpertiseProfile profile) => _expertiseProfileDAO.Update(profile);
        public void Delete(string profileId) => _expertiseProfileDAO.Delete(profileId);
        public ExpertiseProfile GetByFreelancerId(string freelancerId) => _expertiseProfileDAO.GetByFreelancerId(freelancerId);
        public List<ExpertiseProfile> GetByField(string field) => _expertiseProfileDAO.GetByField(field);
    }
}
