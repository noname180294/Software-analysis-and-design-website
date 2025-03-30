package com.example.itplatform_ver1

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.itplatform_ver1.databinding.FragmentChatDetailBinding

class ChatDetailFragment : Fragment() {

    private lateinit var binding: FragmentChatDetailBinding
    private lateinit var chatName: String
    private val messages = mutableListOf<Message>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        chatName = arguments?.getString("chatName") ?: "Unknown"
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentChatDetailBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.chatDetailTitle.text = "Chat with $chatName"

        messages.add(Message("Hello!", true))
        messages.add(Message("Hey, how are you?", false))
        messages.add(Message("I'm good, thanks!", true))

        binding.recyclerViewMessages.layoutManager = LinearLayoutManager(requireContext())
        binding.recyclerViewMessages.adapter = ChatDetailAdapter(messages)

        binding.sendButton.setOnClickListener {
            val messageText = binding.inputMessage.text.toString()
            if (messageText.isNotEmpty()) {
                messages.add(Message(messageText, true))
                binding.recyclerViewMessages.adapter?.notifyDataSetChanged()
                binding.inputMessage.text.clear()
            }
        }
    }
}
