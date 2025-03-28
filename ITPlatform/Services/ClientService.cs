using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface IClientService
    {
        List<Client> GetAllClients();
        Client GetClientById(string clientId);
        void CreateClient(Client client);
        void UpdateClient(Client client);
        void DeleteClient(string clientId);
        Client GetClientByAccountId(string accountId);
        List<Client> GetClientsByField(string field);
    }

    public class ClientService : IClientService
    {
        private readonly IClientRepository _clientRepository;

        public ClientService(IClientRepository clientRepository)
        {
            _clientRepository = clientRepository;
        }

        public List<Client> GetAllClients() => _clientRepository.GetAll();
        public Client GetClientById(string clientId) => _clientRepository.GetById(clientId);
        public void CreateClient(Client client) => _clientRepository.Insert(client);
        public void UpdateClient(Client client) => _clientRepository.Update(client);
        public void DeleteClient(string clientId) => _clientRepository.Delete(clientId);
        public Client GetClientByAccountId(string accountId) => _clientRepository.GetByAccountId(accountId);
        public List<Client> GetClientsByField(string field) => _clientRepository.GetByField(field);
    }
}
