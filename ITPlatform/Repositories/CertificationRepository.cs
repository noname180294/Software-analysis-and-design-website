using BusinessObjects;
using DataAccessObjects;

namespace Repositories
{
    public interface ICertificationRepository
    {
        List<Certification> GetAll();
        Certification GetById(string certId);
        void Insert(Certification certification);
        void Update(Certification certification);
        void Delete(string certId);
        List<Certification> GetByProfileId(string profileId);
    }

    public class CertificationRepository : ICertificationRepository
    {
        private readonly CertificationDAO _certificationDAO;

        public CertificationRepository(CertificationDAO certificationDAO)
        {
            _certificationDAO = certificationDAO;
        }

        public List<Certification> GetAll() => _certificationDAO.GetAll();
        public Certification GetById(string certId) => _certificationDAO.GetById(certId);
        public void Insert(Certification certification) => _certificationDAO.Insert(certification);
        public void Update(Certification certification) => _certificationDAO.Update(certification);
        public void Delete(string certId) => _certificationDAO.Delete(certId);
        public List<Certification> GetByProfileId(string profileId) => _certificationDAO.GetByProfileId(profileId);
    }
}
