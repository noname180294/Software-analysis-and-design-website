using BusinessObjects;
using DataAccessObjects;

namespace Repositories
{
    public interface IClientRepository
    {
        List<Client> GetAll();
        Client GetById(string clientId);
        void Insert(Client client);
        void Update(Client client);
        void Delete(string clientId);
        Client GetByAccountId(string accountId);
        List<Client> GetByField(string field);
    }

    public class ClientRepository : IClientRepository
    {
        private readonly ClientDAO _clientDAO;

        public ClientRepository(ClientDAO clientDAO)
        {
            _clientDAO = clientDAO;
        }

        public List<Client> GetAll() => _clientDAO.GetAll();
        public Client GetById(string clientId) => _clientDAO.GetById(clientId);
        public void Insert(Client client) => _clientDAO.Insert(client);
        public void Update(Client client) => _clientDAO.Update(client);
        public void Delete(string clientId) => _clientDAO.Delete(clientId);
        public Client GetByAccountId(string accountId) => _clientDAO.GetByAccountId(accountId);
        public List<Client> GetByField(string field) => _clientDAO.GetByField(field);
    }
}
