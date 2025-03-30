package com.example.itplatform_ver1

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

data class Package(val name: String, val description: String, val price: String)

class PackageAdapter(private val packages: List<Package>) : RecyclerView.Adapter<PackageAdapter.PackageViewHolder>() {

    class PackageViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val name: TextView = view.findViewById(R.id.packageName)
        val description: TextView = view.findViewById(R.id.packageDescription)
        val price: TextView = view.findViewById(R.id.packagePrice)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PackageViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_package, parent, false)
        return PackageViewHolder(view)
    }

    override fun onBindViewHolder(holder: PackageViewHolder, position: Int) {
        val packageItem = packages[position]
        holder.name.text = packageItem.name
        holder.description.text = packageItem.description
        holder.price.text = packageItem.price
    }

    override fun getItemCount() = packages.size
}