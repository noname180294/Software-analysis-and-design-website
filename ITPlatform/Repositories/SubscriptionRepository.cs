using BusinessObjects;
using DataAccessObjects;

namespace Repositories
{
    public interface ISubscriptionRepository
    {
        Subscription GetById(string subscriptionId);
        List<Subscription> GetByFreelancerId(string freelancerId);
        List<Subscription> GetByClientId(string clientId);
        void Insert(Subscription subscription);
        void Update(Subscription subscription);
        void Delete(string subscriptionId);
        List<Subscription> GetActiveSubscriptions();
    }

    public class SubscriptionRepository : ISubscriptionRepository
    {
        private readonly SubscriptionDAO _subscriptionDAO;

        public SubscriptionRepository(SubscriptionDAO subscriptionDAO)
        {
            _subscriptionDAO = subscriptionDAO;
        }

        public Subscription GetById(string subscriptionId) =>
            _subscriptionDAO.GetSubscriptionById(subscriptionId);

        public List<Subscription> GetByFreelancerId(string freelancerId) =>
            _subscriptionDAO.GetSubscriptionsByFreelancerId(freelancerId);

        public List<Subscription> GetByClientId(string clientId) =>
            _subscriptionDAO.GetSubscriptionsByClientId(clientId);

        public void Insert(Subscription subscription) =>
            _subscriptionDAO.AddSubscription(subscription);

        public void Update(Subscription subscription) =>
            _subscriptionDAO.UpdateSubscription(subscription);

        public void Delete(string subscriptionId) =>
            _subscriptionDAO.DeleteSubscription(subscriptionId);

        public List<Subscription> GetActiveSubscriptions() =>
            _subscriptionDAO.GetActiveSubscriptions();
    }
}
