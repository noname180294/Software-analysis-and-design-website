using BusinessObjects;
using DataAccessObjects;

namespace Repositories
{
    public interface ILocationRepository
    {
        List<Location> GetAll();
        Location GetById(string locationId);
        void Insert(Location location);
        void Update(Location location);
        void Delete(string locationId);
        List<Location> GetByClientId(string clientId);
    }

    public class LocationRepository : ILocationRepository
    {
        private readonly LocationDAO _locationDAO;

        public LocationRepository(LocationDAO locationDAO)
        {
            _locationDAO = locationDAO;
        }

        public List<Location> GetAll() => _locationDAO.GetAll();
        public Location GetById(string locationId) => _locationDAO.GetById(locationId);
        public void Insert(Location location) => _locationDAO.Insert(location);
        public void Update(Location location) => _locationDAO.Update(location);
        public void Delete(string locationId) => _locationDAO.Delete(locationId);
        public List<Location> GetByClientId(string clientId) => _locationDAO.GetByClientId(clientId);
    }
}
