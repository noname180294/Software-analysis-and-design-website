using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface ISkillInProfileService
    {
        SkillInProfile GetSkillInProfileById(string skillInProfileId);
        List<SkillInProfile> GetSkillInProfilesByProfileId(string profileId);
        void CreateSkillInProfile(SkillInProfile skillInProfile);
        void UpdateSkillInProfile(SkillInProfile skillInProfile);
        void DeleteSkillInProfile(string skillInProfileId);
        List<SkillInProfile> GetSkillInProfilesByProficiencyLevel(string proficiencyLevel);
    }

    public class SkillInProfileService : ISkillInProfileService
    {
        private readonly ISkillInProfileRepository _skillInProfileRepository;

        public SkillInProfileService(ISkillInProfileRepository skillInProfileRepository)
        {
            _skillInProfileRepository = skillInProfileRepository;
        }

        public SkillInProfile GetSkillInProfileById(string skillInProfileId) =>
            _skillInProfileRepository.GetById(skillInProfileId);

        public List<SkillInProfile> GetSkillInProfilesByProfileId(string profileId) =>
            _skillInProfileRepository.GetByProfileId(profileId);

        public void CreateSkillInProfile(SkillInProfile skillInProfile) =>
            _skillInProfileRepository.Insert(skillInProfile);

        public void UpdateSkillInProfile(SkillInProfile skillInProfile) =>
            _skillInProfileRepository.Update(skillInProfile);

        public void DeleteSkillInProfile(string skillInProfileId) =>
            _skillInProfileRepository.Delete(skillInProfileId);

        public List<SkillInProfile> GetSkillInProfilesByProficiencyLevel(string proficiencyLevel) =>
            _skillInProfileRepository.GetByProficiencyLevel(proficiencyLevel);
    }
}
