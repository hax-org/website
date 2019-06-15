require 'csv'

=begin

Template for bio

---
name: Hermione Granger
team: Leadership
description: Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui.
image_url: "/assets/images/bios/prof.png"
email: ""
linkedin: "linkedin.com/asdf"
facebook: "facebook.com/asdf"
twitter: "twitter.com/asdf"
---

=end

def formatLink(link)
	unless link.nil? || link =~ /\Ahttp:\/\// || link =~ /\Ahttps:\/\//
    	return "http://#{link}"
  	end
	return link
end

def formatDesc(desc)
	unless desc.nil?
		return '"' + desc.gsub("\n","") + '"'
	end
	return desc
end

def imageUrl(image_url)
	unless image_url.nil?
		return "/assets/images/cms_uploads/#{image_url}"
	else
		return nil
	end 
end

i = 0;
# drop 2 to remove header rows
CSV.parse(File.readlines('data.csv').drop(2).join) do |row|
	i = i+1
	temp_person = Hash.new
	temp_person["order"] = i
	temp_person["name"] = row[1]
	temp_person["position"] = row[2]
	temp_person["description"] = formatDesc(row[3])
	temp_person["image_url"] = imageUrl(row[16])
	temp_person["facebook"] = formatLink(row[6])
	temp_person["twitter"] = formatLink(row[7])
	temp_person["website"] = formatLink(row[8])
	temp_person["youtube"] = formatLink(row[9])
	temp_person["email"] = formatLink(row[10])
	temp_person["github"] = formatLink(row[11])
	temp_person["discord"] = formatLink(row[12])
	temp_person["instagram"] = formatLink(row[13])
	temp_person["linkedin"] = formatLink(row[14])
	temp_person["snapchat"] = formatLink(row[15])

	Dir.chdir("../_bios")
	f = File.open("#{temp_person["name"]}.md", "w")
	f.write("---\n")
	temp_person.each do |key, value|
		f.write("#{key}: #{value}\n")
	end
	f.write("---\n")

	f.close
	Dir.chdir("../parse")
end