using BusinessObjects;
using DataAccessObjects;
using Microsoft.EntityFrameworkCore;

namespace Repositories
{
    public interface ISkillInProfileRepository
    {
        SkillInProfile GetById(string skillInProfileId);
        List<SkillInProfile> GetByProfileId(string profileId);
        void Insert(SkillInProfile skillInProfile);
        void Update(SkillInProfile skillInProfile);
        void Delete(string skillInProfileId);
        List<SkillInProfile> GetByProficiencyLevel(string proficiencyLevel);
    }

    public class SkillInProfileRepository : ISkillInProfileRepository
    {
        private readonly SkillInProfileDAO _skillInProfileDAO;

        public SkillInProfileRepository(SkillInProfileDAO skillInProfileDAO)
        {
            _skillInProfileDAO = skillInProfileDAO;
        }

        public SkillInProfile GetById(string skillInProfileId) =>
            _skillInProfileDAO.GetSkillInProfileById(skillInProfileId);

        public List<SkillInProfile> GetByProfileId(string profileId) =>
            _skillInProfileDAO.GetSkillsInProfileByProfileId(profileId);

        public void Insert(SkillInProfile skillInProfile) =>
            _skillInProfileDAO.AddSkillInProfile(skillInProfile);

        public void Update(SkillInProfile skillInProfile) =>
            _skillInProfileDAO.UpdateSkillInProfile(skillInProfile);

        public void Delete(string skillInProfileId) =>
            _skillInProfileDAO.DeleteSkillInProfile(skillInProfileId);

        public List<SkillInProfile> GetByProficiencyLevel(string proficiencyLevel) =>
            _skillInProfileDAO.GetSkillsInProfileByProficiencyLevel(proficiencyLevel);
    }
}
