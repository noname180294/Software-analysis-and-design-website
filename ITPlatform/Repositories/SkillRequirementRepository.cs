using BusinessObjects;
using DataAccessObjects;

namespace Repositories
{
    public interface ISkillRequirementRepository
    {
        SkillRequirement GetById(string skillRequirementId);
        List<SkillRequirement> GetByProjectId(string projectId);
        void Insert(SkillRequirement skillRequirement);
        void Update(SkillRequirement skillRequirement);
        void Delete(string skillRequirementId);
        List<SkillRequirement> GetByProficiencyLevel(string proficiencyLevel);
    }

    public class SkillRequirementRepository : ISkillRequirementRepository
    {
        private readonly SkillRequirementDAO _skillRequirementDAO;

        public SkillRequirementRepository(SkillRequirementDAO skillRequirementDAO)
        {
            _skillRequirementDAO = skillRequirementDAO;
        }

        public SkillRequirement GetById(string skillRequirementId) =>
            _skillRequirementDAO.GetSkillRequirementById(skillRequirementId);

        public List<SkillRequirement> GetByProjectId(string projectId) =>
            _skillRequirementDAO.GetSkillRequirementsByProjectId(projectId);

        public void Insert(SkillRequirement skillRequirement) =>
            _skillRequirementDAO.AddSkillRequirement(skillRequirement);

        public void Update(SkillRequirement skillRequirement) =>
            _skillRequirementDAO.UpdateSkillRequirement(skillRequirement);

        public void Delete(string skillRequirementId) =>
            _skillRequirementDAO.DeleteSkillRequirement(skillRequirementId);

        public List<SkillRequirement> GetByProficiencyLevel(string proficiencyLevel) =>
            _skillRequirementDAO.GetSkillRequirementsByProficiencyLevel(proficiencyLevel);
    }
}
