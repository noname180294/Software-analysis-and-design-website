using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface ISkillService
    {
        List<Skill> GetAllSkills();
        Skill GetSkillById(string skillId);
        void CreateSkill(Skill skill);
        void UpdateSkill(Skill skill);
        void DeleteSkill(string skillId);
        List<Skill> SearchSkillsByName(string name);
    }

    public class SkillService : ISkillService
    {
        private readonly ISkillRepository _skillRepository;

        public SkillService(ISkillRepository skillRepository)
        {
            _skillRepository = skillRepository;
        }

        public List<Skill> GetAllSkills() => _skillRepository.GetAll();
        public Skill GetSkillById(string skillId) => _skillRepository.GetById(skillId);
        public void CreateSkill(Skill skill) => _skillRepository.Insert(skill);
        public void UpdateSkill(Skill skill) => _skillRepository.Update(skill);
        public void DeleteSkill(string skillId) => _skillRepository.Delete(skillId);
        public List<Skill> SearchSkillsByName(string name) => _skillRepository.SearchByName(name);
    }
}
