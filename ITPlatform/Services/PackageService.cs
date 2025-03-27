using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface IPackageService
    {
        List<Package> GetAllPackages();
        Package GetPackageById(string packageId);
        void CreatePackage(Package package);
        void UpdatePackage(Package package);
        void DeletePackage(string packageId);
        List<Package> GetPackagesByType(string type);
    }

    public class PackageService : IPackageService
    {
        private readonly IPackageRepository _packageRepository;

        public PackageService(IPackageRepository packageRepository)
        {
            _packageRepository = packageRepository;
        }

        public List<Package> GetAllPackages() => _packageRepository.GetAll();
        public Package GetPackageById(string packageId) => _packageRepository.GetById(packageId);
        public void CreatePackage(Package package) => _packageRepository.Insert(package);
        public void UpdatePackage(Package package) => _packageRepository.Update(package);
        public void DeletePackage(string packageId) => _packageRepository.Delete(packageId);
        public List<Package> GetPackagesByType(string type) => _packageRepository.GetByType(type);
    }
}
