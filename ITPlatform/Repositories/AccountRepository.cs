using BusinessObjects;
using DataAccessObjects;

namespace Repositories
{
    public interface IAccountRepository
    {
        List<Account> GetAll();
        Account GetById(string accountId);
        void Insert(Account account);
        void Update(Account account);
        void Delete(string accountId);
        Account GetByEmail(string email);
    }

    public class AccountRepository : IAccountRepository
    {
        private readonly AccountDAO _accountDAO;

        public AccountRepository(AccountDAO accountDAO)
        {
            _accountDAO = accountDAO;
        }

        public List<Account> GetAll() => _accountDAO.GetAll();
        public Account GetById(string accountId) => _accountDAO.GetById(accountId);
        public void Insert(Account account) => _accountDAO.Insert(account);
        public void Update(Account account) => _accountDAO.Update(account);
        public void Delete(string accountId) => _accountDAO.Delete(accountId);
        public Account GetByEmail(string email) => _accountDAO.GetByEmail(email);
    }
}
