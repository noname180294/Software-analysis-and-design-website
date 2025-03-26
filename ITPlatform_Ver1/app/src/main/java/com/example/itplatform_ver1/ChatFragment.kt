package com.example.itplatform_ver1

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class ChatFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_chat, container, false)

        val recyclerView: RecyclerView = view.findViewById(R.id.recyclerViewMessages)
        recyclerView.layoutManager = LinearLayoutManager(requireContext())

        val messages = listOf(
            Message("Alice", "Hey, can we discuss the project?"),
            Message("Bob", "Sure, I’ll send you the details."),
            Message("Charlie", "Let's schedule a call for tomorrow.")
        )

        recyclerView.adapter = ChatAdapter(messages)
        return view
    }
}

data class Message(val sender: String, val text: String)