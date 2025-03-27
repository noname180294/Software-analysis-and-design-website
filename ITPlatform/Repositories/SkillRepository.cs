using BusinessObjects;
using DataAccessObjects;
using Microsoft.EntityFrameworkCore;

namespace Repositories
{
    public interface ISkillRepository
    {
        List<Skill> GetAll();
        Skill GetById(string skillId);
        void Insert(Skill skill);
        void Update(Skill skill);
        void Delete(string skillId);
        List<Skill> SearchByName(string name);
    }

    public class SkillRepository : ISkillRepository
    {
        private readonly SkillDAO _skillDAO;

        public SkillRepository(SkillDAO skillDAO)
        {
            _skillDAO = skillDAO;
        }

        public List<Skill> GetAll() => _skillDAO.GetAllSkills();
        public Skill GetById(string skillId) => _skillDAO.GetSkillById(skillId);
        public void Insert(Skill skill) => _skillDAO.AddSkill(skill);
        public void Update(Skill skill) => _skillDAO.UpdateSkill(skill);
        public void Delete(string skillId) => _skillDAO.DeleteSkill(skillId);
        public List<Skill> SearchByName(string name) => _skillDAO.SearchSkillsByName(name);
    }
}
