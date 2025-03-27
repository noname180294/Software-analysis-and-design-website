using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface IAccountService
    {
        List<Account> GetAllAccounts();
        Account GetAccountById(string accountId);
        void CreateAccount(Account account);
        void UpdateAccount(Account account);
        void DeleteAccount(string accountId);
        Account GetAccountByEmail(string email);
    }

    public class AccountService : IAccountService
    {
        private readonly IAccountRepository _accountRepository;

        public AccountService(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        public List<Account> GetAllAccounts() => _accountRepository.GetAll();
        public Account GetAccountById(string accountId) => _accountRepository.GetById(accountId);
        public void CreateAccount(Account account) => _accountRepository.Insert(account);
        public void UpdateAccount(Account account) => _accountRepository.Update(account);
        public void DeleteAccount(string accountId) => _accountRepository.Delete(accountId);
        public Account GetAccountByEmail(string email) => _accountRepository.GetByEmail(email);
    }
}
