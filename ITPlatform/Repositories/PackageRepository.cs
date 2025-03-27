using BusinessObjects;
using DataAccessObjects;

namespace Repositories
{
    public interface IPackageRepository
    {
        List<Package> GetAll();
        Package GetById(string packageId);
        void Insert(Package package);
        void Update(Package package);
        void Delete(string packageId);
        List<Package> GetByType(string type);
    }

    public class PackageRepository : IPackageRepository
    {
        private readonly PackageDAO _packageDAO;

        public PackageRepository(PackageDAO packageDAO)
        {
            _packageDAO = packageDAO;
        }

        public List<Package> GetAll() => _packageDAO.GetAll();
        public Package GetById(string packageId) => _packageDAO.GetById(packageId);
        public void Insert(Package package) => _packageDAO.Insert(package);
        public void Update(Package package) => _packageDAO.Update(package);
        public void Delete(string packageId) => _packageDAO.Delete(packageId);
        public List<Package> GetByType(string type) => _packageDAO.GetByType(type);
    }
}
