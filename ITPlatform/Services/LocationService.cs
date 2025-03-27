using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface ILocationService
    {
        List<Location> GetAllLocations();
        Location GetLocationById(string locationId);
        void CreateLocation(Location location);
        void UpdateLocation(Location location);
        void DeleteLocation(string locationId);
        List<Location> GetLocationsByClientId(string clientId);
    }

    public class LocationService : ILocationService
    {
        private readonly ILocationRepository _locationRepository;

        public LocationService(ILocationRepository locationRepository)
        {
            _locationRepository = locationRepository;
        }

        public List<Location> GetAllLocations() => _locationRepository.GetAll();
        public Location GetLocationById(string locationId) => _locationRepository.GetById(locationId);
        public void CreateLocation(Location location) => _locationRepository.Insert(location);
        public void UpdateLocation(Location location) => _locationRepository.Update(location);
        public void DeleteLocation(string locationId) => _locationRepository.Delete(locationId);
        public List<Location> GetLocationsByClientId(string clientId) => _locationRepository.GetByClientId(clientId);
    }
}
