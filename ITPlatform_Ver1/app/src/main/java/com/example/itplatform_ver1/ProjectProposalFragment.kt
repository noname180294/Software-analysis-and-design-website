package com.example.itplatform_ver1


import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.itplatform_ver1.databinding.FragmentProjectProposalBinding
import com.example.itplatform_ver1.databinding.ItemProjectBinding

class ProjectProposalFragment : Fragment() {
    private var _binding: FragmentProjectProposalBinding? = null
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentProjectProposalBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // Setup RecyclerView
        binding.projectList.layoutManager = LinearLayoutManager(context)
        binding.projectList.adapter = ProjectAdapter(getSampleProjects())

        // FAB click
        binding.fabPostProject.setOnClickListener {
            // Handle post project action (e.g., navigate to a new screen)
        }
    }

    private fun getSampleProjects(): List<Project> {
        return listOf(
            Project("Build E-commerce App", "Need an Android dev...", "$500 - $1000"),
            Project("Fix API Bugs", "Backend integration issues...", "$200 - $300")
        )
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}

data class Project(val title: String, val description: String, val budget: String)

class ProjectAdapter(private val projects: List<Project>) : RecyclerView.Adapter<ProjectAdapter.ViewHolder>() {

    // ViewHolder class to hold the item views
    class ViewHolder(private val binding: ItemProjectBinding) : RecyclerView.ViewHolder(binding.root) {
        fun bind(project: Project) {
            binding.projectTitle.text = project.title
            binding.projectDescription.text = project.description
            binding.projectBudget.text = project.budget
            binding.applyButton.setOnClickListener {
                // Handle apply button click (e.g., show a toast or navigate)
            }
        }
    }

    // Inflate the item layout and create the ViewHolder
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding = ItemProjectBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(binding)
    }

    // Bind data to the ViewHolder
    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.bind(projects[position])
    }

    // Return the total number of items
    override fun getItemCount(): Int = projects.size
}