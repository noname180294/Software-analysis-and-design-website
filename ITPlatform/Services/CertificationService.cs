using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface ICertificationService
    {
        List<Certification> GetAllCertifications();
        Certification GetCertificationById(string certId);
        void CreateCertification(Certification certification);
        void UpdateCertification(Certification certification);
        void DeleteCertification(string certId);
        List<Certification> GetCertificationsByProfileId(string profileId);
    }

    public class CertificationService : ICertificationService
    {
        private readonly ICertificationRepository _certificationRepository;

        public CertificationService(ICertificationRepository certificationRepository)
        {
            _certificationRepository = certificationRepository;
        }

        public List<Certification> GetAllCertifications() => _certificationRepository.GetAll();
        public Certification GetCertificationById(string certId) => _certificationRepository.GetById(certId);
        public void CreateCertification(Certification certification) => _certificationRepository.Insert(certification);
        public void UpdateCertification(Certification certification) => _certificationRepository.Update(certification);
        public void DeleteCertification(string certId) => _certificationRepository.Delete(certId);
        public List<Certification> GetCertificationsByProfileId(string profileId) => _certificationRepository.GetByProfileId(profileId);
    }
}
