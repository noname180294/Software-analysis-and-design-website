package com.example.itplatform_ver1

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.itplatform_ver1.databinding.ItemMembershipBinding

class MembershipAdapter(private val plans: List<MembershipPlan>) : RecyclerView.Adapter<MembershipAdapter.ViewHolder>() {

    class ViewHolder(private val binding: ItemMembershipBinding) : RecyclerView.ViewHolder(binding.root) {
        fun bind(plan: MembershipPlan) {
            binding.planTitle.text = plan.title
            binding.planPrice.text = plan.price
            binding.planBenefits.text = plan.benefits
            binding.subscribeButton.setOnClickListener {
                // Xử lý khi bấm nút Subscribe
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding = ItemMembershipBinding.inflate(LayoutInflater.from(parent.context), parent, false)

        binding.root.layoutParams = ViewGroup.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.MATCH_PARENT
        )

        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.bind(plans[position])
    }

    override fun getItemCount(): Int = plans.size
}
