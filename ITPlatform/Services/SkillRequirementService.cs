using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface ISkillRequirementService
    {
        SkillRequirement GetSkillRequirementById(string skillRequirementId);
        List<SkillRequirement> GetSkillRequirementsByProjectId(string projectId);
        void CreateSkillRequirement(SkillRequirement skillRequirement);
        void UpdateSkillRequirement(SkillRequirement skillRequirement);
        void DeleteSkillRequirement(string skillRequirementId);
        List<SkillRequirement> GetSkillRequirementsByProficiencyLevel(string proficiencyLevel);
    }

    public class SkillRequirementService : ISkillRequirementService
    {
        private readonly ISkillRequirementRepository _skillRequirementRepository;

        public SkillRequirementService(ISkillRequirementRepository skillRequirementRepository)
        {
            _skillRequirementRepository = skillRequirementRepository;
        }

        public SkillRequirement GetSkillRequirementById(string skillRequirementId) =>
            _skillRequirementRepository.GetById(skillRequirementId);

        public List<SkillRequirement> GetSkillRequirementsByProjectId(string projectId) =>
            _skillRequirementRepository.GetByProjectId(projectId);

        public void CreateSkillRequirement(SkillRequirement skillRequirement) =>
            _skillRequirementRepository.Insert(skillRequirement);

        public void UpdateSkillRequirement(SkillRequirement skillRequirement) =>
            _skillRequirementRepository.Update(skillRequirement);

        public void DeleteSkillRequirement(string skillRequirementId) =>
            _skillRequirementRepository.Delete(skillRequirementId);

        public List<SkillRequirement> GetSkillRequirementsByProficiencyLevel(string proficiencyLevel) =>
            _skillRequirementRepository.GetByProficiencyLevel(proficiencyLevel);
    }
}
