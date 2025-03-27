using BusinessObjects;
using DataAccessObjects;
using Repositories;

namespace Services
{
    public interface ISubscriptionService
    {
        Subscription GetSubscriptionById(string subscriptionId);
        List<Subscription> GetSubscriptionsByFreelancerId(string freelancerId);
        List<Subscription> GetSubscriptionsByClientId(string clientId);
        void CreateSubscription(Subscription subscription);
        void UpdateSubscription(Subscription subscription);
        void DeleteSubscription(string subscriptionId);
        List<Subscription> GetActiveSubscriptions();
    }

    public class SubscriptionService : ISubscriptionService
    {
        private readonly ISubscriptionRepository _subscriptionRepository;

        public SubscriptionService(ISubscriptionRepository subscriptionRepository)
        {
            _subscriptionRepository = subscriptionRepository;
        }

        public Subscription GetSubscriptionById(string subscriptionId) =>
            _subscriptionRepository.GetById(subscriptionId);

        public List<Subscription> GetSubscriptionsByFreelancerId(string freelancerId) =>
            _subscriptionRepository.GetByFreelancerId(freelancerId);

        public List<Subscription> GetSubscriptionsByClientId(string clientId) =>
            _subscriptionRepository.GetByClientId(clientId);

        public void CreateSubscription(Subscription subscription) =>
            _subscriptionRepository.Insert(subscription);

        public void UpdateSubscription(Subscription subscription) =>
            _subscriptionRepository.Update(subscription);

        public void DeleteSubscription(string subscriptionId) =>
            _subscriptionRepository.Delete(subscriptionId);

        public List<Subscription> GetActiveSubscriptions() =>
            _subscriptionRepository.GetActiveSubscriptions();
    }
}
